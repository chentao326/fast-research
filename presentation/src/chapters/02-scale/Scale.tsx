import type { ChapterStepProps } from "../../registry/types";

export default function Scale({ step }: ChapterStepProps) {
  return (
    <div className="sc-wrap">
      {step === 0 && (<div><div className="sc-big">$9514亿</div><div className="sc-sub">全球烟草市场规模</div><div className="sc-china">中国 40%</div><div className="sc-bar-wrap"><div className="sc-bar cn"/><div className="sc-bar ro"/></div></div>)}
      {step === 1 && (<div className="sc-entity"><div className="sc-name">中国烟草总公司</div><div className="sc-roles"><span className="sc-role">企业</span><span className="sc-role">政府</span></div></div>)}
      {step === 2 && (<div><div className="sc-count">18</div><div className="sc-lbl">个省级中烟公司</div></div>)}
      {step === 3 && (<div><div className="sc-brand">中华</div><div className="sc-brand">芙蓉王</div><div className="sc-brand">玉溪</div><div className="sc-brand">黄鹤楼</div></div>)}
    </div>
  );
}
Object.assign(window, { Scale });
