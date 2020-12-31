import React from "react";
import { Box, Link, NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box>
        Nativebase v3.0
        <Box>
          <Link href="https://nativebase.github.io">Getting started</Link>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
}
