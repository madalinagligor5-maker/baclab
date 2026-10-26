/* eslint-disable @next/next/no-img-element */
export function Logo({ height = 28, mark = false }: { height?: number; mark?: boolean }) {
  const base = mark ? "mark" : "logo";
  const w = mark ? height : Math.round(height * 5.45);
  return (
    <>
      <img src={`/brand/${base}-plum.png`} alt="BacLab" height={height} width={w} className="block dark:hidden" style={{ height, width: "auto" }} />
      <img src={`/brand/${base}-cream.png`} alt="" aria-hidden height={height} width={w} className="hidden dark:block" style={{ height, width: "auto" }} />
    </>
  );
}
