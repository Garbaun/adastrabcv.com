import Reveal from "@/components/Reveal";

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-5 pt-32 text-center">
      <Reveal direction="up"><h1 className="text-3xl font-extrabold">Tasarım</h1></Reveal>
      <Reveal direction="up" delay={0.1}>
        <p className="mt-3 text-muted dark:text-white/60">Kurumsal kimlik, logo ve kreatif tasarım — içerik çok yakında burada olacak.</p>
      </Reveal>
    </div>
  );
}
