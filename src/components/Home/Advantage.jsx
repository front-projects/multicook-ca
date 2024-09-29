export default function Advantage({ title, icon, desc }) {
  return (
    <div className="bg-[rgb(173,136,101)]/50 shadow-[0_4px_40px_#ffffff0a] gap-4 h-[168px] flex items-center justify-center w-full rounded-xl px-4">
      <div>{icon}</div>
      <div>
        <h3>{title}</h3>
        <p className="text-sm mt-2">{desc}</p>
      </div>
    </div>
  );
}
