import { NextRequest, NextResponse } from "next/server";
import { getUserByclerkId } from "@/utils/auth";
import { prisma } from "@/utils/db";
export const GET = async (req: NextRequest, context: { params: { id: string } }) => {
	const user = await getUserByclerkId();
	const params = await context.params;
	const id = params.id;
	console.log('Getting information fot ', params);
	const entries = await prisma.posts.findFirst({
		where: {
			id: id,
			userId: user.id
		}
	});
	return NextResponse.json({ data: entries });
}
export const PATCH = async (req: NextRequest, context: { params: { id: string } }) => {
	const user = await getUserByclerkId();
	const paramsValue = context.params;
	const jsonContent = await req.json();
	if (paramsValue != undefined && paramsValue != null) {
		const Updatedentries = await prisma.posts.update({
			where: {
				id: (paramsValue.id) as any,
				userId: user.id
			}, data: {
				content: jsonContent.content as any || "",
				userId: user.id
			}
		});
		return NextResponse.json({ data: Updatedentries });
	}
	return NextResponse.json({ data: [] })
}
