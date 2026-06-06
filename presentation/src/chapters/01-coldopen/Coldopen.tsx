import type { ChapterStepProps } from "../../registry/types";

export default function Coldopen({ step }: ChapterStepProps) {
  return (
    <div className="cd-wrap">
      {step === 0 && <div className="cd-q">你知道中国国防预算一年多少钱吗？</div>}
      {step === 1 && <div className="cd-big">1.67<span className="cd-unit">万亿</span></div>}
      {step === 2 && (
        <div className="cd-payoff">
          <div className="cd-line">中国人抽烟交的税</div>
          <div className="cd-impact">差不多能覆盖这笔军费</div>
          <div className="cd-compare">
            <div className="cd-cell"><div className="cd-num">1.54</div><div className="cd-lbl">万亿 · 烟草税利</div></div>
            <div className="cd-cell"><div className="cd-num">92%</div><div className="cd-lbl">国防预算</div></div>
          </div>
        </div>
      )}
    </div>
  );
}
Object.assign(window, { Coldopen });
