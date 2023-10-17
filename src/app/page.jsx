"use client";
import Layout from "../components/Layout";
import { toast } from "sonner";
import Button from "../components/Form/Button";
export default function () {
  return (
    <div>
      <Layout></Layout>
      <Button className="w-10" onClick={() => toast.success("Terminso aceptados")}>Clic</Button>
    </div>
  );
}
