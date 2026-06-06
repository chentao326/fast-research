import type { ChapterStepProps } from "../../registry/types";

export default function Ending({ step }: ChapterStepProps) {
  return (
    <div className="ed-wrap">
      {step === 0 && <div className="ed-lines"><div className="ed-line">中国烟草是一个悖论</div><div className="ed-line">最大的税源</div><div className="ed-line ed-accent">也是最大的健康负担</div></div>}
      {step === 1 && <div><div className="ed-ph">[ 绿色专卖标识 ]</div><div className="ed-punch">你看到的不是一家店</div><div className="ed-sub">是一台万亿印钞机</div><div className="ed-tag">FastResearch · 2026</div></div>}
    </div>
  );
}
Object.assign(window, { Ending });
