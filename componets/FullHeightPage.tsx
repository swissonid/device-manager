type Props = {
    children: JSX.Element,
    className?: string,
};

const FullHeightPage = ({children, className}:Props) => (
    <div className={className}>
        {children}
        <style global jsx>{`
      html,
      body,
      body > div:first-child,
      div#__next,
      div#__next > div {
        height: 100%;
      }
    `}</style>
    </div>
);

export default FullHeightPage;