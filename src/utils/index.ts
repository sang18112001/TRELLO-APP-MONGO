import { MouseEvent } from 'react';

interface addChildDistance {
   event: MouseEvent<HTMLElement>;
   ulRef: React.RefObject<HTMLUListElement | null>;
   lenChild: number;
}

interface IHorizontalDistance {
   event: MouseEvent<HTMLLIElement>;
   startCoordinate: string;
   indexTask: number;
   // ulRef: React.RefObject<HTMLUListElement | null>;
}


interface IVerticalDistance {
   event: MouseEvent<HTMLLIElement>;
   dropIndex: number;
}

export const addChildDistanceCompute = ({ event, ulRef, lenChild }: addChildDistance) => {
   const { clientX, clientY } = event
   const ul = ulRef.current as HTMLUListElement;
   const button = ul.querySelector('button');
   const buttonRect = button?.getBoundingClientRect();
   if (buttonRect) {
      const { top, left, right, bottom } = buttonRect
      const checkInButton = clientX >= left && clientX < right && clientY >= top && clientY <= bottom
      if (checkInButton) return lenChild != 0 ? lenChild : 0;
   }
}

export const horizonalDistanceCompute = ({ event, startCoordinate, indexTask }: IHorizontalDistance) => {
   const lis = Array.from(document.querySelectorAll('li.childIssue'))
   const li = lis[indexTask]
   const liRect = li.getBoundingClientRect();
   const { clientY } = event
   const { top, height } = liRect
   const distance = clientY - (top + height / 2)
   return Math.abs(distance) < height / 2 && distance > 0 ? indexTask + 1 : indexTask;
};

export const verticalDistanceCompute = ({ event, dropIndex }: IVerticalDistance) => {
   const lis = Array.from(document.querySelectorAll('li.issue'))
   const li = lis[dropIndex]
   const liRect = li.getBoundingClientRect();
   const { clientX } = event
   const { left, width } = liRect
   const distance = clientX - (left + width / 2)
   return Math.abs(distance) < width / 2 && distance > 0 ? dropIndex + 1 : dropIndex;
}

