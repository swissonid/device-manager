type Props = {
  children: JSX.Element;
  className?: string;
};

// https://gist.github.com/dmurawsky/d45f068097d181c733a53687edce1919
const FullHeightPage = ({ children, className }: Props) => (
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
