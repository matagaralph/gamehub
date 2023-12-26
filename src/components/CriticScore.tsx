import { Badge } from './ui/badge';

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  return (
    <Badge color={score > 75 ? 'green' : score > 60 ? 'yellow' : 'zinc'}>
      {score}
    </Badge>
  );
};

export default CriticScore;