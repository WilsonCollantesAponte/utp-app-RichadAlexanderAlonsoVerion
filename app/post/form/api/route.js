import DataBaseInteraction from "@/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { image, data, postScope } = await request.json();
  const { title, description } = data;
  const {
    architecture,
    industrialEngineering,
    systemsEngineering,
    civilEngineering,
  } = postScope;

  await DataBaseInteraction.post.create({
    include: {
      postScope: true,
    },
    data: {
      title,
      description,
      image,
      postScope: {
        create: {
          systemsEngineering,
          civilEngineering,
          industrialEngineering,
          architecture,
        },
      },
    },
  });

  return NextResponse.json({ okNewPost: true });
  // return NextResponse.json({
  //   data: {
  //     title,
  //     description,
  //     image,
  //     postScope: {
  //       create: {
  //         systemsEngineering,
  //         civilEngineering,
  //         industrialEngineering,
  //         architecture,
  //       },
  //     },
  //   },
  // });
}
