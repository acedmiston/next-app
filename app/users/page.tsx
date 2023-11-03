import React, { Suspense } from 'react';
import UserTable from './new/UserTable';
import Link from 'next/link';

interface UsersPageProps {
    searchParams: {
        sortOrder: string;
    };
};


const UsersPage =  ({searchParams: {sortOrder}}: UsersPageProps) => {
    console.log(sortOrder);
  return (
    <>
    <h1>Users</h1>
    <Link href="/users/new" className='btn btn-primary'>New User</Link>
    <Suspense fallback={<div>Loading...</div>}>
    <UserTable sortOrder={sortOrder} />
    </Suspense>
    </>
  )
}

export default UsersPage