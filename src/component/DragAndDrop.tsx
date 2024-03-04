import { ReactNode, useState } from "react";

function DragAndDrop({
  className,
  children,
  key,
}: {
  className?: string;
  children?: ReactNode;
  key?: string;
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null | undefined>(null);

  function handleDragEnter(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragging(true);
  }

  function handleDragLeave(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragging(false);
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    // Do something with the dropped files
    setFile(files[0]);
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setFile(selectedFile);
  };

  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    title: {
      color: "#605B5B",
      fontSize: "13px",
    },
    subtitle: {
      color: "#878787",
      fontWeight: 500,
      fontSize: "11px",
    },
    icon: {
      width: "21px",
      height: "21px",
    },
  };

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      style={{
        width: "100%",
      }}
    >
      <label
        htmlFor={key ? key : "file"}
        style={{
          ...styles.container,
          width: "100%",
          flexDirection: "column",

          border: isDragging ? "2px dashed #605B5B" : "2px dashed transparent",
          borderRadius: "6px",
        }}
      >
        {!children ? (
          <div
            style={{
              backgroundColor: "#0A2328",
              width: "100%",
              padding: "32px 0",
              borderRadius: "6px",
            }}
            className={`${className}`}
          >
            <div
              style={{
                ...styles.container,
                gap: "20px",
              }}
            >
              <p style={styles.title}>Upload files</p>
              <Icon />
            </div>
            <p style={{ ...styles.subtitle, textAlign: "center" }}>
              {file ? <p>{file.name}</p> : "Or Drag and Drop"}
            </p>
          </div>
        ) : (
          <>{children}</>
        )}
      </label>
      <input
        type="file"
        id={key ? key : "file"}
        onChange={handleFileChange}
        style={{
          display: "none",
        }}
      />
    </div>
  );
}

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
    >
      <g clipPath="url(#clip0_225_872)">
        <path
          d="M10.5 12.4688V3.28125"
          stroke="#605B5B"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.7188 12.4688V17.0625C17.7188 17.2365 17.6496 17.4035 17.5265 17.5265C17.4035 17.6496 17.2365 17.7188 17.0625 17.7188H3.9375C3.76345 17.7188 3.59653 17.6496 3.47346 17.5265C3.35039 17.4035 3.28125 17.2365 3.28125 17.0625V12.4688"
          stroke="#605B5B"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.21875 6.5625L10.5 3.28125L13.7812 6.5625"
          stroke="#605B5B"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_225_872">
          <rect width="21" height="21" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default DragAndDrop;
