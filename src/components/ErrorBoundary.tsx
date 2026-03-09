import React from "react";

interface ErrorBoundaryProps {
    children: React.ReactNode;
}
interface ErrorBoundaryState{
    hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState>{
    constructor(props: ErrorBoundaryProps){
        super(props);
        this.state = {
            hasError: false
        }
    }

    static deriveStateFromError(error: Error): ErrorBoundaryState {
        return {
            hasError: true
        }
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
         // You can also log the error to an error reporting service
         logErrorToMyService(error, errorInfo);
    }
    render(){
        return (
            <>
            {this.state.hasError ? (
              <div className="max-w-7xl mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold text-red-700">Something went wrong.</h1>
                <p className="text-gray-700">Please try again later.</p>
            </div>
            ) : (
                this.props.children
            )}
            </>
        )
    }
}

export default ErrorBoundary;

function logErrorToMyService(error: Error, errorInfo: React.ErrorInfo) {
    throw new Error("Function not implemented.");
}
