interface Props {
  params: { id: string; photoId: string };
}
function PhotoDetailPage({ params: { id, photoId } }: Props) {
  return (
    <div>
      Photo Page of the user: {id} and photo: {photoId}
    </div>
  );
}

export default PhotoDetailPage;
