"use client";

import { useEffect } from "react";
import { fetchUsers } from "@/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../src/hooks/hooks";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function Home() {
  const dispatch = useAppDispatch();
  const { users, loading } = useAppSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black flex justify-center p-10">
      
      <div className="w-full max-w-4xl">
        
        <h1 className="text-3xl font-bold mb-6 text-center text-zinc-900 dark:text-white">
          Redux Toolkit 
        </h1>
        <Button>
          login
        </Button>

        {loading ? (
          <p className="text-center text-blue-500">Loading users...</p>
        ) : (
          <div className="rounded-lg border bg-white dark:bg-zinc-900 shadow">
            <Table>
              
      
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center w-1/6">ID</TableHead>
                  <TableHead className="text-left w-2/5">Name</TableHead>
                  <TableHead className="text-left w-2/5">Email</TableHead>
                </TableRow>
              </TableHeader>

           
              <TableBody>
                {users?.map((user: any) => (
                  <TableRow key={user.id} className="hover:bg-muted/50">
                    <TableCell className="text-center font-medium">
                      {user.id}
                    </TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell className="text-gray-600 dark:text-gray-300">
                      {user.email}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>

            </Table>
          </div>
        )}
      </div>
    </main>
  );
}