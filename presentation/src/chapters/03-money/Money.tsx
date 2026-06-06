import type { ChapterStepProps } from "../../registry/types";

function BarRow({ label, val, cls, show }: { label: string; val: string; cls: string; show: boolean }) {
  if (!show) return null;
  return <div className="mn-row"><span className="mn-label">{label}</span><div className="mn-track"><div className={`mn-fill ${cls}`}/></div><span className="mn-val">{val}</span></div>;
}

export default function Money({ step }: ChapterStepProps) {
  return (
    <div className="mn-wrap">
      {step === 0 && <div className="mn-intro"><div className="mn-pack">拆开一包烟</div><div className="mn-price">30 元</div></div>}
      {step >= 1 && step <= 4 && (
        <div className="mn-bars">
          <BarRow label="税收 60%" val="18元" cls="tax" show={step>=1}/>
          <BarRow label="公司利润" val="5元" cls="profit" show={step>=2}/>
          <BarRow label="零售户" val="3元" cls="retail" show={step>=3}/>
          <BarRow label="成本" val="3元" cls="cost" show={step>=4}/>
        </div>
      )}
      {step === 5 && <div className="mn-punch"><div className="mn-line">你花 30 块</div><div className="mn-line">买到的东西本身只值</div><div className="mn-big">3 块</div></div>}
    </div>
  );
}
Object.assign(window, { Money });
