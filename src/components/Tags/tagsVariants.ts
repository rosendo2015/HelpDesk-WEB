import { cva } from "class-variance-authority";

export const tagsVariants = cva("flex items-center justify-center text-xs-bold rounded-full", {
    variants: {
        variant: {
            "new": "border border-feedback-open/20 bg-bg-feedback-open-20",
            "info": "border border-feedback-progress/20 bg-bg-feedback-info-20",
            "success": "border border-feedback-done/20 bg-bg-feedback-success-20",
            "danger": "border border-feedback-danger/20 bg-bg-feedback-danger-20",
            "default": "border border-gray-500/20 bg-gray-500",
        },
        size: {
            "md-width-text": "px-1.5 py-1.5 rounded-full",
            "md-height-text": "w-7 h-7 rounded-full",
        },
        display: {
            "text": "gap-1",
            "icon": "flex items-center justify-center",
        },
        format: {
            "default": "",
            "circle": "rounded-full",
            "squared": "p-1.5 rounded-sm hover:bg-gray-100/20",
        }
    },
    defaultVariants: {
        variant: "new",
        size: "md-width-text",
        display: "text",
        format: "default"
    }
})

export const tagsTextVariants = cva("", {
    variants: {
        variant: {
            "new": "text-feedback-open",
            "info": "text-feedback-progress",
            "success": "text-feedback-done",
            "danger": "text-feedback-danger",
            "default": "text-gray-100",
        }
    },
    defaultVariants: {
        variant: "new"
    }
})

export const tagsIconVariants = cva("w-4 h-4", {
    variants: {
        variant: {
            "new": "fill-feedback-open",
            "info": "fill-feedback-progress",
            "success": "fill-feedback-done",
            "danger": "fill-feedback-danger",
            "default": "fill-gray-100",
        }
    }
})
