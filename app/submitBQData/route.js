import bigquery from "../lib/bigquery";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const datasetId = process.env.DATASET_ID; // The BigQuery dataset ID
  const tableId = process.env.TABLE_ID; // The BigQuery table ID

  const data = await req.json();

  //   Insert the rows into the BigQuery table
  // const [apiResponse] = await bigquery
  //   .dataset(datasetId)
  //   .table(tableId)
  //   .insert(data);

  // return NextResponse.json({
  //   status: 200,
  //   success: true,
  //   ok: true,
  //   response: apiResponse,
  // });
  return NextResponse.json({
    status: 200,
    success: true,
    ok: true,
    response: "Success!",
  });
}
