import Countdown from 'react-countdown';

export default function Timer({ duration }: { duration: number }) {
  const CompletionItem = () => <>0 : 0 : 0</>;

  const renderer = ({ hours, minutes, seconds, completed }: any) => {
    if (completed) {
      // Render a complete state
      return <CompletionItem />;
    } else {
      // Render a countdown
      return (
        <>
          {hours} : {minutes} : {seconds}
        </>
      );
    }
  };
  return <Countdown date={Date.now() + duration} renderer={renderer} />;
}
