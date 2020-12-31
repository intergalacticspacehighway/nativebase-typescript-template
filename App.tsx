import React from "react";
import { Box, Link, NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box>
        <Box>NativeBase 3.0</Box>
        <Link href="https://nativebase.github.io/">Documentation</Link>
      </Box>
    </NativeBaseProvider>
  );
}
