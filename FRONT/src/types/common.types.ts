// Tipos comunes y de utilidad

interface BaseProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
  success: boolean;
}

interface ApiError {
  status: number;
  message: string;
  errors?: Record<string, string[]>;
}

export type { BaseProps, ApiResponse, ApiError };
