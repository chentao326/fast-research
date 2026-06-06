import type { ChapterStepProps } from "../../registry/types";

export default function Monopoly({ step }: ChapterStepProps) {
  return (
    <div className="mp-wrap">
      {step === 0 && <div><div className="mp-year">1983</div><div className="mp-desc">上千家小烟厂，质量混乱</div><div className="mp-sub">之前</div></div>}
      {step === 1 && <div className="mp-dual"><div className="mp-card"><div className="mp-t">中国烟草总公司</div><div className="mp-s">企业</div></div><div className="mp-eq">=</div><div className="mp-card"><div className="mp-t">国家烟草专卖局</div><div className="mp-s">政府部门</div></div></div>}
      {step === 2 && <div className="mp-contra"><div className="mp-item">说控烟 → 3亿烟民没少太多</div><div className="mp-item">说保护烟农 → 烟农无议价权</div></div>}
      {step === 3 && <div className="mp-reason"><div className="mp-big">高效收税</div><div className="mp-flow"><div className="mp-node">出厂</div><div className="mp-arrow">→</div><div className="mp-node">征税</div><div className="mp-arrow">→</div><div className="mp-node">国库</div></div></div>}
      {step === 4 && <div className="mp-final"><div className="mp-line">一包烟的钱</div><div className="mp-line mp-accent">出厂时就进国库了</div></div>}
    </div>
  );
}
Object.assign(window, { Monopoly });
