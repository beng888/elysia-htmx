import Page from "../../components/Page";

export default function login() {
  return Page("/login", () => (
    <form
      class="w-96 space-y-3 rounded-lg bg-white p-8 shadow-md"
      hx-post="/api/organization"
      hx-target-4xx="#errorMessageCreate"
      hx-target-5xx="#errorMessageCreate"
      hx-swap="innerHTML"
    >
      <label for="email" class="block text-sm font-medium text-gray-600">
        Organization Name (numbers and letters only)
      </label>
      <input
        type="text"
        name="email"
        id="email"
        placeholder="Enter organization name"
        required
        minlength="1"
        maxlength="30"
        pattern="[a-zA-Z0-9]+"
        class="w-full rounded-md border p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />

      <label for="password" class="block text-sm font-medium text-gray-600">
        Password
      </label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Enter password"
        required
        minlength="1"
        maxlength="30"
        class="w-full rounded-md border p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />

      <button
        type="submit"
        class="w-full rounded-lg bg-blue-500 p-2 text-white transition duration-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
      >
        Login
      </button>
    </form>
  ));
}
