import { Badge } from './ui/badge';

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  if (!score) return null;
  return (
    <Badge color={score > 75 ? 'green' : score > 60 ? 'yellow' : 'orange'}>
      {score}
    </Badge>
  );
};

export default CriticScore;
