import React from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableItem from "./SortableItem";
import { IoIosCloseCircle } from "react-icons/io";
import { useEffect } from "react";
import { useState } from "react";

export default function WishlistPanel({ wishlist, setWishlist, display, setDisplay }) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = wishlist.findIndex((i) => i.id === active.id);
      const newIndex = wishlist.findIndex((i) => i.id === over.id);
      setWishlist(arrayMove(wishlist, oldIndex, newIndex));
    }
  };

  const changedisplay = ()=>{
    setDisplay("hidden")
  }


  return (
    <div className={` ${display} top-0 right-0 w-full sm:w-64 md:w-80 bg-white dark:bg-gray-900 h-full shadow-lg p-4 z-40`}>
        <div className="flex w-full justify-between h-10 items-center ">
            <h3 className="font-bold text-lg mb-2">Wishlist ❤️</h3>
            <IoIosCloseCircle className="text-gray-700 text-3xl cursor-pointer" onClick={changedisplay}/>
        </div>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={wishlist.map((item) => item.id)} strategy={verticalListSortingStrategy}>
          {wishlist.map((item) => (
            <SortableItem key={item.id} id={item.id} title={item.title} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
}
