import type { NextApiRequest, NextApiResponse } from "next";
import type { Data } from "@/types/ApiDataType";
import foodMenu from "@/utilities/json/foodMenu.json";

function getDataByCategory(category: string) {
  const items = foodMenu.items.filter((item) => item.category === category);
  return items;
}

function getData(category?: string) {
  if (!category) {
    return {
      ok: false,
      error: "category was not specified",
    };
  }
  const items = getDataByCategory(category.toLowerCase());
  return {
    body: {
      category: category,
      items: items,
      total: items.length,
    },
  };
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const queryCategory: string =
    req.query["category"] && (req.query["category"] as any);
  const { error, body } = getData(queryCategory);

  if (error) {
    return res.status(404).json({
      ok: false,
      message: error ?? "No data found as specified",
    });
  }

  return res.status(200).json({
    ok: true,
    message: null,
    body,
  });
}
