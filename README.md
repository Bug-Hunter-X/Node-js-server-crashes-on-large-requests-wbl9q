# Node.js Server Crash on Large Requests

This repository demonstrates a common issue in Node.js servers where they can crash when handling large requests due to memory exhaustion.  The problem stems from the unbounded growth of the `body` variable in the request handler, as it lacks a mechanism to limit the amount of data it can accumulate. This can lead to a denial-of-service vulnerability as malicious actors could easily flood the server with large requests and consume the server's memory.

## Bug

The `bug.js` file contains the buggy code.  The server is vulnerable to crashing if it receives requests with a body larger than the available memory.  This happens because the server attempts to read the entire request body into memory before processing it.

## Solution

The `bugSolution.js` file provides a solution which uses a stream to process the request body in chunks, effectively preventing memory exhaustion. This solution demonstrates the importance of using streams to handle potentially large amounts of data in Node.js to avoid memory leaks and crashes.