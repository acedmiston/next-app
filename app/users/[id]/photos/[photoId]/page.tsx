import React from 'react';

interface PhotoPageProps {
    params: {
        id: number;
        photoId: number;
    }
}

function PhotoPage({params: {id, photoId}}: PhotoPageProps) {
  return (
    <div>PhotoPage{id} {photoId}</div>
  )
}

export default PhotoPage