const { exec } = require("node:child_process");

function checkPostgres() {
  exec("docker exec postgres-db-dev pg_isready --host localhost", handleReturn);

  function handleReturn(_error: any, stdout: string) {
    if (stdout.search("accepting connections") === -1) {
      process.stdout.write(".");
      checkPostgres();
      return;
    }

    console.log("\n🟢 Database is ready and accepting connections\n");
  }
}

console.log("\n\n🔴 Waiting for database accept connections");
checkPostgres();
