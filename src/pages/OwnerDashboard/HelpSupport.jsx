import {
    FaQuestionCircle,
    FaEnvelope,
    FaPhoneAlt,
    FaBook,
    FaComments,
    FaHeadset,
} from "react-icons/fa";


export default function HelpSupport() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">

                <div>

                    <h1 className="text-4xl font-bold">
                        Help & Support
                    </h1>

                    <p className="text-gray-500 mt-2">
                        We're here to help you manage your Nestora account.
                    </p>

                </div>

            </div>
                  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <FaHeadset className="text-5xl text-blue-600 mb-5" />

          <h2 className="text-2xl font-bold">
            Live Support
          </h2>

          <p className="text-gray-500 mt-3">
            Chat instantly with our support team.
          </p>

          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl">
            Start Chat
          </button>

        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <FaEnvelope className="text-5xl text-green-600 mb-5" />

          <h2 className="text-2xl font-bold">
            Email Support
          </h2>

          <p className="text-gray-500 mt-3">
            support@nestora.com
          </p>

          <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-xl">
            Send Email
          </button>

        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <FaPhoneAlt className="text-5xl text-orange-500 mb-5" />

          <h2 className="text-2xl font-bold">
            Call Us
          </h2>

          <p className="text-gray-500 mt-3">
            +91 98765 43210
          </p>

          <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-xl">
            Call Now
          </button>

        </div>

      </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">

        <div className="flex items-center gap-3 mb-8">

          <FaQuestionCircle className="text-blue-600 text-3xl" />

          <h2 className="text-3xl font-bold">
            Frequently Asked Questions
          </h2>

        </div>

        <div className="space-y-5">

          <div className="border rounded-2xl p-5">
            <h3 className="font-bold">
              How can I post a new room?
            </h3>
            <p className="text-gray-500 mt-2">
              Go to Dashboard → Post Room and fill all details.
            </p>
          </div>

          <div className="border rounded-2xl p-5">
            <h3 className="font-bold">
              How do I edit my listing?
            </h3>
            <p className="text-gray-500 mt-2">
              Open My Listings and click Edit.
            </p>
          </div>

          <div className="border rounded-2xl p-5">
            <h3 className="font-bold">
              How do I receive payments?
            </h3>
            <p className="text-gray-500 mt-2">
              Payments are shown in the Earnings page.
            </p>
          </div>

        </div>

      </div>

            <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <FaBook className="text-5xl text-purple-600 mb-5" />

          <h2 className="text-2xl font-bold">
            Documentation
          </h2>

          <p className="text-gray-500 mt-3">
            Learn how to use every feature of Nestora.
          </p>

          <button className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-xl">
            Read Docs
          </button>

        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <FaComments className="text-5xl text-pink-600 mb-5" />

          <h2 className="text-2xl font-bold">
            Community
          </h2>

          <p className="text-gray-500 mt-3">
            Join the Nestora Owner Community.
          </p>

          <button className="mt-6 bg-pink-600 text-white px-6 py-3 rounded-xl">
            Join Now
          </button>

        </div>

      </div>

            <div className="text-center text-gray-500 py-8">

        © 2026 Nestora • Help & Support

      </div>

    </div>
  );
}