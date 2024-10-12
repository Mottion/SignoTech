export interface SearchComponentProps{
  value: string, 
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> | undefined
}