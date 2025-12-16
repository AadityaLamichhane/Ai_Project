import { getUserByclerkId } from "@/utils/auth"
import { prisma } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {

	const user = await getUserByclerkId();
	const content = await req.json();
	console.log('content', content);
	console.log('Content of this is', content);
	const entries = await prisma.posts.create({
		data: {
			content: content?.data as any || "",
			userId: user.id
		}
	});
	return NextResponse.json({ data: entries });
}
