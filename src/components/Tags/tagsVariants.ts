import { cva } from "class-variance-authority";

export const tagsVariants = cva("inline-flex items-center justify-center rounded-full", {
    variants: {
        variant: {
            "new": "border border-feedback-open/20 bg-bg-feedback-open-20",
            "info": "border border-feedback-progress/20 bg-bg-feedback-info-20",
            "success": "border border-feedback-done/20 bg-bg-feedback-success-20",
            "danger": "border border-feedback-danger/20 bg-bg-feedback-danger-20"
        },
        size: {
            "md": "p-1.5",
        }
    },
    defaultVariants: {
        variant: "new",
        size: "md"
    }
})

export const tagsTextVariants = cva("", {
    variants: {
        variant: {
            "new": "text-feedback-open",
            "info": "text-feedback-progress",
            "success": "text-feedback-done",
            "danger": "text-feedback-danger",
        }
    },
    defaultVariants: {
        variant: "new"
    }
})

export const tagsIconVariants = cva("w-5 h-5 mr-1", {
    variants: {
        variant: {
            "new": "fill-feedback-open",
            "info": "fill-feedback-progress",
            "success": "fill-feedback-done",
            "danger": "fill-feedback-danger",
        }
    }
})
