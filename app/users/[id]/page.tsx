import { notFound } from 'next/navigation';
import React from 'react'

interface UserDetailPageProps {
    params: {
        id: number;
    }
}

function UserDetailPage({params: {id}}: UserDetailPageProps) {
    if(id > 10) notFound();
  return (
    <div>UserDetailPage {id}</div>
  )
}

export default UserDetailPage;