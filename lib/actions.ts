import db from "@/prisma/db";

export const addSubscriberAction = async (formData: {
  email: string;
}): Promise<void> => {
  try {
    await db.subscribers.create({
      data: {
        ...formData,
      },
    });
  } catch (error) {
    //   return renderError(error);
  }
  // redirect("/admin/products");
};
