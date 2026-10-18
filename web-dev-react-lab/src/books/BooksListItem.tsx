import { useState } from 'react';

type BooksListItemProps = {
  id: string;
  title: string;
  year: number;
  authorName: string;
  onDelete: (id: string) => void;
  onUpdate: (id: string, newTitle: string) => void;
};

function BooksListItem({
  id,
  title,
  year,
  authorName,
  onDelete,
  onUpdate,
}: BooksListItemProps) {
  const [isEditMode, setEditMode] = useState<boolean>(false);
  const [updatedTitle, setUpdatedTitle] = useState<string>(title);

  const saveNewTitle = () => {
    onUpdate(id, updatedTitle);
    setEditMode(false);
  };

  if (isEditMode) {
    return (
      <div>
        <input
          value={updatedTitle}
          onChange={(e) => setUpdatedTitle(e.target.value)}
        />
        <p>{authorName}</p>
        <button onClick={() => setEditMode(false)}>Cancel</button>
        <button onClick={() => saveNewTitle()}>Save</button>
      </div>
    );
  }

  return (
    <div>
      <h3>
        {title} ({year})
      </h3>
      <p>{authorName}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
      <button onClick={() => setEditMode(true)}>Update</button>
    </div>
  );
}

export default BooksListItem;
