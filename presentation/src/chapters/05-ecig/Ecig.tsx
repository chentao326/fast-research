import type { ChapterStepProps } from "../../registry/types";

export default function Ecig({ step }: ChapterStepProps) {
  return (
    <div className="ec-wrap">
      {step === 0 && <div><div className="ec-tag">2025</div><div className="ec-msg">电子烟纳入专卖体系</div></div>}
      {step === 1 && <div className="ec-surface"><div className="ec-r">规范市场秩序</div><div className="ec-r">保护未成年人</div></div>}
      {step === 2 && <div className="ec-impact"><div className="ec-num">90%</div><div className="ec-s">中小企业退出市场</div><div className="ec-icons">{Array.from({length:10}).map((_,i)=><div key={i} className={`ec-icon${i>=1?' gone':''}`}/>)}</div></div>}
      {step === 3 && <div className="ec-conclusion"><div className="ec-l">垄断不是在退出</div><div className="ec-l ec-a">是在扩张</div></div>}
    </div>
  );
}
Object.assign(window, { Ecig });
