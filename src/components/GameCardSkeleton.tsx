import { Card, CardContent } from './ui/card';
import { Skeleton } from './ui/skeleton';

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton className="h-[200px]" />
      <CardContent>
        <Skeleton className="h-4 rounded-md mt-4" />
        <Skeleton className="h-4 rounded-md mt-2.5" />
        <Skeleton className="h-4 rounded-md mt-2.5" />
        <Skeleton className="h-4 rounded-md mt-2.5" />
      </CardContent>
    </Card>
  );
};

export default GameCardSkeleton;
