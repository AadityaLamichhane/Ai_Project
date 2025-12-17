import { NextRequest, NextResponse } from "next/server";
import { getUserByclerkId } from "@/utils/auth";
import { prisma } from "@/utils/db";
export const GET = async (req: NextRequest, context: { params: { id: string } }) => {
	const user = await getUserByclerkId();
	const params = await context.params; // This indeed is the prmomise function  that depends on the requ 
	const id = params.id;
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
	const paramsValue = await context.params;
	const jsonContent = await req.json();
	console.log("updating json content", jsonContent);
	if (paramsValue != undefined && paramsValue != null) {
		const UpdateEntry = await prisma.posts.update({
			where: {
				id: (paramsValue.id) as any,
				userId: user.id
			}, data: {
				content: jsonContent.content as any || "",
				userId: user.id
			}
		});
		return NextResponse.json({ data: UpdateEntry });
	}
	return NextResponse.json({ data: [] })
}
