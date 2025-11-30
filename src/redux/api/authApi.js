import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // Register new user
        register: builder.mutation({
            query: (userData) => ({
                url: "/auth/register",
                method: "POST",
                body: userData, // { email, password, name }
            }),
            invalidatesTags: ["auth"],
        }),

        // Login user
        login: builder.mutation({
            query: (credentials) => ({
                url: "/auth/login",
                method: "POST",
                body: credentials, // { email, password }
            }),
            invalidatesTags: ["auth"],
        }),

        // Verify email with OTP
        verifyEmail: builder.mutation({
            query: (data) => ({
                url: "/auth/verify-email",
                method: "POST",
                body: data, // { email, otp }
            }),
        }),

        // Request password reset (sends OTP to email)
        forgotPassword: builder.mutation({
            query: (data) => ({
                url: "/auth/forgot-password",
                method: "POST",
                body: data, // { email }
            }),
        }),

        // Reset password with OTP
        resetPassword: builder.mutation({
            query: (data) => ({
                url: "/auth/reset-password",
                method: "POST",
                body: data, // { email, otp, newPassword }
            }),
        }),
    }),
});

export const {
    useRegisterMutation,
    useLoginMutation,
    useVerifyEmailMutation,
    useForgotPasswordMutation,
    useResetPasswordMutation,
} = authApi;
