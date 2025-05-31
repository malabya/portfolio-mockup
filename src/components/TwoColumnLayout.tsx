type LayoutProps = {
  childrenLeftCol: React.ReactNode,
  childrenRightCol: React.ReactNode,
}

export default function TwoColumnLayout({ childrenLeftCol, childrenRightCol } : LayoutProps) {
  return (
    <div className="layout-2-cols flex flex-col md:flex-row md:items-center md:gap-20 ">
      <div className="layout-col-1 flex-1 lg:pe-20">
        {childrenLeftCol}
      </div>
      <div className="layout-col-2 flex-1 relative mt-10 md:mt-0">
        {childrenRightCol}
      </div>
    </div>
  );
}
