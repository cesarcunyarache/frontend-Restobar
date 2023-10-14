import Link from "next/link";

export default function NotFount() {
  return (
    <div>
      <h1>404</h1>
      <p>Pagina no encontrada</p>
      <Link href="/">Volver</Link>
    </div>
  );
}
