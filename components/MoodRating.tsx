import { prisma } from "@/utils/db";
function Hello({ content }: { content: string }) {
	return (<>
		Mood:	{content}
	</>)
}
export default Hello;
