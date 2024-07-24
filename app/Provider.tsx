"use client";

import React, { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import Loader from "@/components/Loader";

const Provider = ( {children} : { children : React.ReactNode })  => {
  return (
    <LiveblocksProvider 
        authEndpoint={"/api/liveblocks-auth"}
        //publicApiKey={"pk_prod_Qy53ztoFZQkjZ7hkcWad2joh0Jx2ZTIrrlTNewgnQ5V5QvlBwzgYldjAtgo35Eeg"}
    >
      <ClientSideSuspense fallback={<Loader/>}>
        {children}
      </ClientSideSuspense>
  </LiveblocksProvider>

  )
}

export default Provider