import Page from "../components/Page";

export default function index() {
  return Page("/", () => (
    <div class="flex flex-col items-center py-3">
      <a
        href="/login"
        hx-boost="false"
        class="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-white transition duration-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
      >
        login
      </a>
    </div>
  ));
}
