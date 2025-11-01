import React from 'react';

export interface ErrorBoundaryWrapperProps {
  fallback?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

interface State { hasError: boolean; }

class ErrorBoundary extends React.Component<ErrorBoundaryWrapperProps, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, info: any) {
    console.error('ErrorBoundary:', error, info);
    console.log(error)
    console.log(info)
  }

  render() {
    if (this.state.hasError) {
      return <div className={this.props.className}>{this.props.fallback ?? 'Something went wrong.'}</div>;
    }
    return this.props.children;
  }
}

export const ErrorBoundaryWrapper = ErrorBoundary;
