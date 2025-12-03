import { auth, currentUser } from "@clerk/nextjs/server"
import { prisma } from "./db";

// Associates the user with the clerk id, creates if doesn't exist
export const getUserByclerkId = async () => {
    const { userId } = await auth();
    
    if (!userId) {
        throw new Error("User is not authenticated");
    }
    
    try {
        // Try to find existing user
        const user = await prisma.user.findFirstOrThrow({
            where: {
                clerkId: userId,
            },
        });
        return user;
    } catch (err) {
        // User doesn't exist, create them
        try {
            const clerkUser = await currentUser();
            
            const newUser = await prisma.user.create({
                data: {
                    clerkId: userId,
                    email: clerkUser?.primaryEmailAddress?.emailAddress || "unknown@email.com",
                },
            });
            return newUser;
        } catch (createErr) {
            throw createErr;
        }
    }
}