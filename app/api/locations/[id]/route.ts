import { getConnection } from "@/lib/db";
import { LocationType } from "@/type";
import { NextRequest, NextResponse } from "next/server";

const query = `select A.*, B.image_url 
    from location A 
    left outer join image B 
    on A.image_id = B.image_id 
    where location_id = @id`;

interface Props {
  params: {
    id: string;
  };
}

export async function GET(
  req: NextRequest,
  { params: { id } }: Props
): Promise<NextResponse<LocationType>> {
  if (isNaN(Number(id)))
    throw new Error("Location의 id는 숫자 형식이어야 합니다. 전달된 값: " + id);

  const pool = await getConnection();
  const request = pool.request();
  request.input("id", id);

  const result = await request.query(query);

  if (result.rowsAffected[0] == 0)
    throw new Error("id에 해당하는 데이터가 없습니다. 전달된 값: " + id);

  console.log("재즈바 검색 id: " + id);
  return NextResponse.json(result.recordset[0], { status: 200 });
}
