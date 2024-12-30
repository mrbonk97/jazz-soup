import { getConnection } from "@/lib/db";
import { LocationType } from "@/type";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest
): Promise<NextResponse<LocationType[]>> {
  let query = `select 
            A.location_id 
        ,   A.name 
        ,   A.address 
        ,   A.caption 
        ,   A.phone_number 
        ,   B.image_url 
        ,   case (DATEPART(WEEKDAY,  GETDATE() AT TIME ZONE 'UTC' AT TIME ZONE 'Korea Standard Time') - 1) 
                when 0 then opening_hour0 
                when 1 then opening_hour1 
                when 2 then opening_hour2 
                when 3 then opening_hour3 
                when 4 then opening_hour4 
                when 5 then opening_hour5 
                when 6 then opening_hour6 
            end as opening_hour 
    from LOCATION A 
    left outer join IMAGE B 
    on A.image_id = B.image_id 
    `;

  const gu = req.nextUrl.searchParams.get("gu");
  if (gu) query += `where A.gu = '${gu}'`;

  const pool = await getConnection();
  const request = pool.request();

  const result = await request.query(query);
  return NextResponse.json(result.recordset, { status: 200 });
}
