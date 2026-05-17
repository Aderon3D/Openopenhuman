//! The entry point for the OpenHuman core application.
//!
//! This file is responsible for:
//! - Initializing error tracking with Sentry.
//! - Setting up secret scrubbing for outgoing error reports.
//! - Dispatching command-line arguments to the core logic in `openhuman_core`.



/// Main application entry point.
///
/// It initializes the Sentry SDK for error monitoring, ensuring that sensitive
/// information is redacted before being sent to the server. After setup, it
/// delegates execution to the core library based on CLI arguments.
fn main() {
    // Load `.env` before `sentry::init` so a DSN defined only in the dotenv
    // file is visible to the Sentry client at startup. `dotenvy::dotenv()` is
    // a no-op for variables already present in the process environment, and
    // the CLI dispatcher later calls `load_dotenv_for_cli` which honors
    // `OPENHUMAN_DOTENV_PATH`; this early call handles the common default
    // case (repo-local `.env`) so startup-time consumers (Sentry, config
    // overrides) see the same values as runtime RPC handlers.
    let _ = dotenvy::dotenv();

    // Sentry has been purged for privacy and local-first execution.

    // Collect command-line arguments, skipping the binary name.
    let args: Vec<String> = std::env::args().skip(1).collect();

    // Delegate to the core library to handle the command.
    if let Err(err) = openhuman_core::run_core_from_args(&args) {
        eprintln!("{err}");
        std::process::exit(1);
    }
}

